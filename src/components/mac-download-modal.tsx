"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Apple, Cpu } from "lucide-react"
import { Button } from "./ui/button"

export function MacDownloadModal({
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
            Choose Your Mac Version
          </DialogTitle>
          <p className="text-center text-white/70 mt-2">
            Select the appropriate download for your Mac
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
                <Apple className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">Apple Silicon (M1/M2/M3/M4)</h3>
                <p className="text-sm text-white/80 mt-1">For Macs with Apple M-series chips</p>
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
                <Cpu className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">Intel Mac</h3>
                <p className="text-sm text-white/80 mt-1">For older Macs with Intel processors</p>
              </div>
            </div>
          </Button>

          <p className="text-sm text-white/60 mt-2 text-center">
            Not sure which version to download? Intel Macs were sold before 2020.
            <br />
            Apple Silicon Macs (M1, M2, M3, M4) were released from late 2020 onwards.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 