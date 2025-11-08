import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCard({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
