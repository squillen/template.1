"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import { format, addDays, startOfWeek, isSameDay, addWeeks, isBefore } from "date-fns";

import { useFetchService } from "@/hooks/storefront/services";
import { useParams } from "next/navigation";
import { Loading } from "./loading";
import { Error } from "./error";
import { BackButton } from "./back-button";


interface BookedSlot {
  dayIndex: number;
  startHour: number;
  duration: number; // in minutes
}

type StoreHours = { open: number; close: number }

// Store hours configuration
const storeHours: Record<number, StoreHours | null> = {
  0: null, // Sunday - closed
  1: { open: 9, close: 18 }, // Monday
  2: { open: 9, close: 18 }, // Tuesday
  3: { open: 9, close: 18 }, // Wednesday
  4: { open: 9, close: 18 }, // Thursday
  5: { open: 9, close: 18 }, // Friday
  6: { open: 9, close: 14 }, // Saturday
};

export default function ServiceAppointmentPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchService(id as string);

  const [currentWeekStart, setCurrentWeekStart] = useState(() => startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; hour: number; minute: number } | null>(null);

  // Time slots in 30-minute increments
  const timeSlots = useMemo(() => {
    const slots: { hour: number; minute: number; label: string }[] = [];

    for (let day = 0; day < 7; day++) {
      const hours = storeHours[day]
      if (hours) {
        for (let hour = hours.open; hour < hours.close; hour++) {
          slots.push({ hour, minute: 0, label: format(new Date().setHours(hour, 0), "h:mm a") });
          slots.push({ hour, minute: 30, label: format(new Date().setHours(hour, 30), "h:mm a") });
        }
      }
    }

    return slots;
  }, []);

  // Generate random booked slots for the demo
  const bookedSlots: BookedSlot[] = useMemo(() => {
    const slots: BookedSlot[] = [];
    const seed = currentWeekStart.getTime();
    
    const durations = [30, 60, 90, 120];
    for (let i = 0; i < 6; i++) {
      const dayIndex = ((seed / 1000 + i * 7) % 6); // 0-5 (Mon-Sat)
      const startHour = 9 + ((seed / 1000 + i * 3) % 6);
      const duration = durations[(seed / 1000 + i) % durations.length];
      slots.push({ dayIndex: Math.floor(dayIndex), startHour, duration });
    }
    return slots;
  }, [currentWeekStart]);

  // Generate week days
  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(currentWeekStart, i);
      const dayOfWeek = date.getDay();
      const hours = storeHours[dayOfWeek];
      return {
        date,
        dayName: format(date, "EEE"),
        dayNumber: format(date, "d"),
        month: format(date, "MMM"),
        isOpen: hours !== null,
        openHour: hours?.open ?? 0,
        closeHour: hours?.close ?? 0,
        dayIndex: i
      };
    });
  }, [currentWeekStart]);

  // Check if a time slot is booked
  const isSlotBooked = (dayIndex: number, hour: number, minute: number) => {
    const slotStartMinutes = hour * 60 + minute;
    const slotEndMinutes = slotStartMinutes + 60 // FIX data.duration;
    
    return bookedSlots.some(booking => {
      if (booking.dayIndex !== dayIndex) return false;
      const bookingStartMinutes = booking.startHour * 60;
      const bookingEndMinutes = bookingStartMinutes + booking.duration;
      
      // Check for overlap
      return slotStartMinutes < bookingEndMinutes && slotEndMinutes > bookingStartMinutes;
    });
  };

  // Check if slot would extend past closing time
  const isSlotPastClosing = (dayIndex: number, hour: number, minute: number) => {
    const day = weekDays[dayIndex];
    if (!day.isOpen) return true;
    
    const slotEndMinutes = hour * 60 + minute + 60 // FIX data.duration;
    const closeMinutes = day.closeHour * 60;
    
    return slotEndMinutes > closeMinutes;
  };

  // Check if slot is in the past
  const isPastSlot = (date: Date, hour: number, minute: number) => {
    const slotTime = new Date(date);
    slotTime.setHours(hour, minute, 0, 0);
    return isBefore(slotTime, new Date());
  };

  // Check if slot is within store hours
  const isWithinStoreHours = (dayIndex: number, hour: number, minute: number) => {
    const day = weekDays[dayIndex];
    if (!day.isOpen) return false;
    
    const slotMinutes = hour * 60 + minute;
    const openMinutes = day.openHour * 60;
    const closeMinutes = day.closeHour * 60;
    
    return slotMinutes >= openMinutes && slotMinutes < closeMinutes;
  };

  // Get booked slot display info for rendering
  const getBookedSlotStyle = (booking: BookedSlot) => {
    const startOffset = (booking.startHour - 9) * 2 + (booking.duration > 30 ? 0 : 0);
    const heightUnits = Math.ceil(booking.duration / 30);
    return {
      top: `${startOffset * 32 + 4}px`,
      height: `${heightUnits * 32 - 4}px`
    };
  };

  const handleSlotClick = (dayIndex: number, date: Date, hour: number, minute: number) => {
    if (
      isSlotBooked(dayIndex, hour, minute) ||
      isPastSlot(date, hour, minute) ||
      isSlotPastClosing(dayIndex, hour, minute) ||
      !isWithinStoreHours(dayIndex, hour, minute)
    ) {
      return;
    }
    setSelectedSlot({ date, hour, minute });
  };

  const isSlotSelected = (date: Date, hour: number, minute: number) => {
    return selectedSlot && 
      isSameDay(selectedSlot.date, date) && 
      selectedSlot.hour === hour && 
      selectedSlot.minute === minute;
  };

  const handlePreviousWeek = () => {
    const newWeekStart = addWeeks(currentWeekStart, -1);
    const today = startOfWeek(new Date(), { weekStartsOn: 1 });
    if (!isBefore(newWeekStart, today)) {
      setCurrentWeekStart(newWeekStart);
      setSelectedSlot(null);
    }
  };

  const handleNextWeek = () => {
    setCurrentWeekStart(addWeeks(currentWeekStart, 1));
    setSelectedSlot(null);
  };

  const canGoPrevious = !isBefore(
    addWeeks(currentWeekStart, -1),
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  // Calculate how many slots the service spans for visual indication
  const serviceSlotsSpan = Math.ceil( 60 /* FIX service.durationMinutes*/ / 30);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <section className="p-8 w-full md:w-[50%] mx-auto">
      {data?.id ? (
        <div className="min-h-screen bg-background p-4 md:p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h1 className="text-2xl font-bold">Choose Appointment</h1>
            </div>

            {/* Service Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{data.name}</h2>
                    <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{formatDuration(60 /* FIX service.durationMinutes */)}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    ${data.variants[0].prices[0].value}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card>
              <CardHeader className="pb-2 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Select a Time</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePreviousWeek}
                      disabled={!canGoPrevious}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium min-w-[160px] text-center">
                      {format(currentWeekStart, "MMMM d")} – {format(addDays(currentWeekStart, 6), "d, yyyy")}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNextWeek}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Day headers */}
                <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b bg-muted/30">
                  <div className="p-2" /> {/* Empty corner */}
                  {weekDays.map((day) => (
                    <div 
                      key={day.dayIndex} 
                      className={`p-3 text-center border-l ${!day.isOpen ? 'bg-muted/50' : ''}`}
                    >
                      <div className="text-xs text-muted-foreground uppercase">{day.dayName}</div>
                      <div className={`text-xl font-semibold ${isSameDay(day.date, new Date()) ? 'text-primary' : ''}`}>
                        {day.dayNumber}
                      </div>
                      {!day.isOpen && (
                        <div className="text-xs text-muted-foreground">Closed</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Time grid */}
                <div className="grid grid-cols-[80px_repeat(7,1fr)] overflow-y-auto">
                  {/* Time labels column */}
                  <div className="border-r">
                    {timeSlots.map((slot, idx) => (
                      <div 
                        key={`time-${slot.hour}-${slot.minute}`} 
                        className="h-8 flex items-center justify-end pr-2 text-xs text-muted-foreground"
                      >
                        {slot.minute === 0 && slot.label}
                      </div>
                    ))}
                  </div>

                  {/* Day columns */}
                  {weekDays.map((day) => (
                    <div key={`col-${day.dayIndex}`} className="border-l relative">
                      {/* Booked appointments overlay */}
                      {bookedSlots
                        .filter(b => b.dayIndex === day.dayIndex)
                        .map((booking, idx) => {
                          const style = getBookedSlotStyle(booking);
                          return (
                            <div
                              key={`booked-${day.dayIndex}-${idx}`}
                              className="absolute left-1 right-1 bg-muted/80 border border-border rounded-md flex items-center justify-center text-xs text-muted-foreground z-10"
                              style={style}
                            >
                              Booked
                            </div>
                          );
                        })}

                      {/* Time slots */}
                      {timeSlots.map((slot) => {
                        if (!isWithinStoreHours(day.dayIndex, slot.hour, slot.minute)) {
                          return (
                            <div 
                              key={`slot-${day.dayIndex}-${slot.hour}-${slot.minute}`}
                              className="h-8 bg-muted/30 border-b border-dashed border-border/50"
                            />
                          );
                        }

                        const isBooked = isSlotBooked(day.dayIndex, slot.hour, slot.minute);
                        const isPast = isPastSlot(day.date, slot.hour, slot.minute);
                        const pastClosing = isSlotPastClosing(day.dayIndex, slot.hour, slot.minute);
                        const isSelected = isSlotSelected(day.date, slot.hour, slot.minute);
                        const isDisabled = isBooked || isPast || pastClosing;

                        return (
                          <div
                            key={`slot-${day.dayIndex}-${slot.hour}-${slot.minute}`}
                            onClick={() => handleSlotClick(day.dayIndex, day.date, slot.hour, slot.minute)}
                            className={`
                              h-8 border-b border-dashed border-border/50 transition-colors relative
                              ${isSelected 
                                ? 'bg-primary/20 cursor-pointer z-20' 
                                : isDisabled
                                  ? 'cursor-not-allowed'
                                  : 'hover:bg-primary/10 cursor-pointer'
                              }
                              ${slot.minute === 0 ? 'border-t border-solid border-border/30' : ''}
                            `}
                          >
                            {/* Selection indicator showing service duration */}
                            {isSelected && (
                              <div 
                                className="absolute left-1 right-1 top-0 bg-primary rounded-md flex items-center justify-center text-xs text-primary-foreground font-medium z-20"
                                style={{ height: `${serviceSlotsSpan * 32 - 4}px` }}
                              >
                                {format(new Date().setHours(slot.hour, slot.minute), "h:mm a")}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-6 p-4 border-t text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-primary" />
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-muted/80 border border-border" />
                    <span>Booked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-muted/30" />
                    <span>Unavailable</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected appointment summary */}
            {selectedSlot && (
              <Card className="border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Your appointment</div>
                      <div className="font-semibold">
                        {format(selectedSlot.date, "EEEE, MMMM d, yyyy")} at{" "}
                        {format(new Date().setHours(selectedSlot.hour, selectedSlot.minute), "h:mm a")}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {formatDuration(60 /* FIX service.durationMinutes */)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-4">
              <BackButton />
              <Button 
                disabled={!selectedSlot}
                onClick={() => {
                  console.log("Selected appointment:", selectedSlot);
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Error message="Service not found." />
      )}
    </section>
  );
};

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins} min`;
  if (mins === 0) return hours === 1 ? "1 hour" : `${hours} hours`;
  return `${hours}h ${mins}m`;
};
