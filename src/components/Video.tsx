import React from "react";

interface VideoProps {
    source: string;
}

export default function Video({ source }: VideoProps){
    return (
        <video controls playsInline style={{ maxWidth: "100%" }}>
            <source src={source} />
        </video>
    )
}