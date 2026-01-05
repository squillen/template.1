import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">About Our Company</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-6">
              {`With over a decade of experience, we've been helping businesses transform and grow through innovative
              solutions and strategic partnerships. Our team of experts is dedicated to delivering exceptional results
              that exceed expectations.`}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Industry-leading expertise and experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Proven track record of successful projects</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Dedicated support and ongoing partnership</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Cutting-edge technology and methodologies</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Industry Awards</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
