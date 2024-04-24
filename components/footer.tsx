import Download from "@/components/download";

export default function Footer() {
    return (
        <footer className="flex items-center w-full h-24 border-t justify-between px-20" id="footer">
            <p className="text-center">© 2024 Gemini Camera App</p>
            <Download size={150} />
        </footer>
    );
}