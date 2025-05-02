"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Monitor, Laptop } from "lucide-react"
import { Button } from "./ui/button"

export function WindowsDownloadModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Choose Your Windows Version
          </DialogTitle>
          <p className="text-center text-white/70 mt-2">
            Select the appropriate download for your PC
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-6">
          <Button
            variant="outline"
            className="h-auto p-6 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white border-purple-500/20 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-white/10">
                <Monitor className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">Windows (64-bit)</h3>
                <p className="text-sm text-white/80 mt-1">For most modern Windows PCs</p>
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="h-auto p-6 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white border-purple-500/20 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-white/10">
                <Laptop className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">Windows (32-bit)</h3>
                <p className="text-sm text-white/80 mt-1">For older Windows PCs</p>
              </div>
            </div>
          </Button>

          <p className="text-sm text-white/60 mt-2 text-center">
            Not sure which version to download? Most modern PCs (2010 onwards) use 64-bit.
            <br />
            Only use 32-bit if you have a very old PC or specifically know you need it.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 