import { Blocks } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Build by Asliddin dev</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://t.me/akromov_uz?text=Yordam%20kerak%0A" className="text-gray-400 hover:text-gray-300 transition-colors">
              Yordam
            </Link>
            <Link href="https://t.me/akromov_uz?text=Malumot%20kerak%0A" className="text-gray-400 hover:text-gray-300 transition-colors">
              Malumotlar
            </Link>
            <Link href="https://t.me/akromov_uz?text=Sayt%egasi%20kerak%0A" className="text-gray-400 hover:text-gray-300 transition-colors">
              Ega
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
