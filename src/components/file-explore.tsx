import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useState, useMemo, useCallback, Fragment } from "react";
import { Hint } from "./hint";
import { Button } from "./ui/button";
import { CodeView } from "./code-view";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbEllipsis
} from "@/components/ui/breadcrumb";
import "../components/code-view/code-theme.css";
import { convertFilesToTreeItems } from "@/lib/utils";
import { TreeView } from "./tree-view";

type FileCollection = { [path: string]: string }

function getLanguageFromExtension(filename:string):string {
  const extension = filename.split(".")?.pop()?.toLowerCase();
  return extension || "text"
}

function decodeHtmlEntities(text: string): string {
  if (typeof document === 'undefined') {
    return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  }
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

interface FileBreadcrumbProps {
  filepath: string;
}

const FileBreadcrumb = ({ filepath }: FileBreadcrumbProps) => {
  const pathSegments = filepath.split("/");
  const maxSegments = 3

  const renderBreadcrumbItems = () => {
    if(pathSegments.length <= maxSegments){
      return pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        return (
          <Fragment key={index}>
            <BreadcrumbItem>
              {isLast ? (
                <BreadcrumbPage className="font-medium">
                  {segment}
                </BreadcrumbPage>
              ) : (
                <span className="text-muted-foreground">
                  {segment}
                </span>
              )}
            </BreadcrumbItem>

          
            {!isLast && <BreadcrumbSeparator />}
          
          </Fragment>
        )
      })
    } else {
      const firstSegment = pathSegments[0]
      const lastSegment = pathSegments[pathSegments.length - 1]
    
      return (
        <>
          <BreadcrumbItem>
            <span className="text-muted-foreground">
              {firstSegment}
            </span> 

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">
                {lastSegment}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbItem>
        </>
      )
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>{renderBreadcrumbItems()}</BreadcrumbList>
    </Breadcrumb>
  );
}
  

interface FileExplorerProps {
  files: FileCollection;
}

export const FileExplorer = ({ files }: FileExplorerProps) => {

  const [copied, setCopied] = useState(false);

  const [selectedFile, setSelectedFile] = useState<string | null>(() => {
    const fileKeys = Object.keys(files);
    return fileKeys.length > 0 ? fileKeys[0] : null;
  });

  const treeData = useMemo(() => {
    return convertFilesToTreeItems(files);
  },[files])

  const handleFileSelect = useCallback((
    filePath: string
  ) => {
    if(files[filePath]){
      setSelectedFile(filePath)
    }
  },[files]);

  const handleCopy = useCallback(() => {
    if(selectedFile){
      navigator.clipboard.writeText(files[selectedFile])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  },[selectedFile, files])

  const decodedCode = useMemo(() => {
    if (!selectedFile || !files[selectedFile]) {
      return "";
    }
    const code = decodeHtmlEntities(files[selectedFile] || "");
  
    if (code.startsWith("```") && code.endsWith("```")) {
      const lines = code.split("\n");
      return lines.slice(1, lines.length - 1).join("\n");
    } else if (code.startsWith("`") && code.endsWith("`")) {
      return code.slice(1, -1);
    }

    return code;
  }, [selectedFile, files]);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={25}
        minSize={25}
        className="bg-sidebar"
      >
        
          <TreeView
            data={treeData}
            value={selectedFile}
            onSelect={handleFileSelect}
          />
        
      </ResizablePanel>

      <ResizableHandle className="hover:bg-primary transition-colors" />
      
      <ResizablePanel defaultSize={70} minSize={50}>
        {selectedFile && files[selectedFile] ? (
          <div className="h-full w-full flex flex-col">
            <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
              
              <FileBreadcrumb filepath={selectedFile} />

              <Hint text="Copy to clipboard" side="bottom">
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto"
                  onClick={handleCopy}
                  disabled={!selectedFile || copied}
                > 
                  {copied ? <CopyCheckIcon /> : <CopyIcon />}
                </Button>
              </Hint>
            </div>

            <div className="flex-1 overflow-auto">
              <CodeView 
                //code={files[selectedFile]}
                code={decodedCode}
                lang={getLanguageFromExtension(selectedFile)}
              />
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Select a file to view it&apos;s content
          </div>
        )}
      </ResizablePanel>

    </ResizablePanelGroup>
  )
}


