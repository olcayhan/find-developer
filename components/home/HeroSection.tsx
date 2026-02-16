import Image from "next/image"
import { Button, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center gap-4 w-full h-117.5"
            style={{ backgroundImage: "url('assets/images/bg.webp')" }}
        >
            <Image src="/assets/images/logo.webp" alt="Logo" width={700} height={96} />
            <Image src="/assets/images/header-text.webp" alt="Header Text" width={460} height={50} />
            <div className="flex flex-col items-end gap-2 w-full max-w-xl">
                <div className="flex w-full gap-2">
                    <div className="flex flex-row items-center w-full gap-2 bg-white rounded-4xl p-2 max-w-md">
                        <Search className="text-gray-500" />
                        <InputBase className="w-full" placeholder="İş Ara | İş, Şirket, Anahtar Kelime" />
                    </div>
                    <Button variant="contained" className="px-6 py-2 bg-white" sx={{
                        backgroundColor: 'white',
                        borderRadius: '28px',
                        padding: '8px 50px',
                    }}>
                        <Image src="/assets/images/find-text.webp" alt="Find" width={60} height={25} />
                    </Button>
                </div>
                <Link href="#" className="text-white text-sm  underline underline-offset font-sans">
                    Detaylı Arama
                </Link>
            </div>
        </section>
    )
}