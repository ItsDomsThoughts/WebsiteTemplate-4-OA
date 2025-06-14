"use client"

import { motion } from "framer-motion"
import { Bot, FileText, Search, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UploadFeatures() {
  const features = [
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "AI-Powered Summaries",
      description: "Get concise, structured summaries of your research papers generated by our advanced AI",
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: "Interactive Chat",
      description: "Ask questions about your document and get specific answers with references to the original text",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Key Sections Extraction",
      description: "Automatically identify and extract the most important sections, findings, and conclusions",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Export & Share",
      description: "Download AI-generated summaries as PDF or text files to share with colleagues",
    },
  ]

  return (
    <div className="mt-12 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <p className="mt-2 text-muted-foreground">Upload your document and let our AI do the heavy lifting</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <div className="text-primary">{feature.icon}</div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
