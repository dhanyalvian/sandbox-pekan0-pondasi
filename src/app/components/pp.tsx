import Image from "next/image";

export default function ProfilePicture() {
    return (
        <div className="mt-4 mb-4">
            <Image priority={true}
            src="/images/profile.jpeg"
            alt="Dhany Noor Alfian"
            width={150}
            height={150}
            className="rounded-full border-2 border-sky-200 p-1 object-cover"
            />
        </div>
    );
}