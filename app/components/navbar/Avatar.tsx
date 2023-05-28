'use client';
import { useRouter } from "next/router"
import Image from "next/image";

interface AvatarProps{
	src?: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({src}) => {
	// const router= useRouter()
	return (
		<Image
			className="rounded-full"
			height="30"
			width="30"
			alt="Avatar"
			src= {src || "/images/placeholder.png"}
		/>
	);
}

export default Avatar