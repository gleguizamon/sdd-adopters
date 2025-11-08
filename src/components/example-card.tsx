import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ExampleCard() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Welcome to SDD Adopters</CardTitle>
        <CardDescription>
          A modern Next.js boilerplate with app router
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This project is built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui components.
          It follows modern best practices and includes a clean folder structure.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Learn More</Button>
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  )
}
