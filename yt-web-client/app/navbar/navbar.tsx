import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4">
            <Link className="w-24 h-5 relative" href="/">
                <Image src="/youtube-logo.svg" alt="YouTube Logo" fill />
            </Link>
        </nav>
    );
}
