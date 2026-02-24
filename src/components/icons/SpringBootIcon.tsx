/* eslint-disable @next/next/no-img-element */
export default function SpringBootIcon({ className }: { className?: string }) {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            src="/icons/spring-boot.svg"
            alt="Spring Boot"
            width={20}
            height={20}
            className={className}
        />
    );
}
