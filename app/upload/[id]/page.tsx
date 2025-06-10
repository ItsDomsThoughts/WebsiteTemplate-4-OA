import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UploadedDocumentChat } from "@/components/uploaded-document-chat"
import { UploadedDocumentInfo } from "@/components/uploaded-document-info"
import { UploadedDocumentSummary } from "@/components/uploaded-document-summary"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Chat with Uploaded Document | AI Research Assistant",
  description: "Ask questions and get AI-powered insights about your uploaded document",
}

export default function UploadedDocumentPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the document data based on the ID
  const documentId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/upload">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to upload
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Download Summary
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <FileText className="h-4 w-4" />
                View Original
              </Button>
            </div>
          </div>

          <UploadedDocumentInfo
            title="Quantum Computing: Recent Advances and Future Directions"
            type="PDF Document"
            pages={24}
            uploadDate="March 15, 2025"
          />

          <Tabs defaultValue="chat" className="mt-8">
            <TabsList>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="summary">AI Summary</TabsTrigger>
              <TabsTrigger value="key-sections">Key Sections</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="mt-6">
              <UploadedDocumentChat />
            </TabsContent>
            <TabsContent value="summary" className="mt-6">
              <UploadedDocumentSummary />
            </TabsContent>
            <TabsContent value="key-sections" className="mt-6">
              <div className="prose max-w-none dark:prose-invert">
                <h2>Abstract</h2>
                <p>
                  This paper provides a comprehensive overview of recent advances in quantum computing, focusing on
                  quantum algorithms, error correction, and hardware implementations. We discuss the potential impact of
                  quantum computing on various fields, including cryptography, materials science, and artificial
                  intelligence. Additionally, we explore the challenges and opportunities in scaling quantum systems and
                  outline future research directions.
                </p>

                <h2>Introduction</h2>
                <p>
                  Quantum computing leverages the principles of quantum mechanics to perform computations that would be
                  infeasible for classical computers. The field has seen significant progress in recent years, with
                  demonstrations of quantum supremacy and the development of increasingly sophisticated quantum
                  algorithms and hardware platforms.
                </p>

                <h2>Key Findings</h2>
                <ul>
                  <li>
                    Quantum algorithms for optimization problems show polynomial speedup over classical counterparts
                  </li>
                  <li>Error correction techniques have improved qubit coherence times by an order of magnitude</li>
                  <li>Hybrid quantum-classical approaches offer practical advantages for near-term applications</li>
                  <li>
                    Quantum machine learning algorithms demonstrate potential for exponential speedup in specific tasks
                  </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  While significant challenges remain in scaling quantum systems and mitigating errors, the rapid pace
                  of advancement in quantum computing suggests that practical applications may be realized sooner than
                  previously anticipated. Continued investment in both hardware and algorithm development is essential
                  to unlock the full potential of quantum computing.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  )
}
