import React from "react";
import { Message as TMessage} from "ai/react";

interface MessageProps {
    content: string;
    isUserMessage: boolean;
}

const Message = ({content, isUserMessage} : MessageProps) => {
    const filteredContent = content.startsWith("Reponds en francais : ")
    // ? content.substring(20)
    ? content.replace("Reponds en francais : ", "")
    : content;

    return (
        <div className={`flex w-full ${isUserMessage ? 'justify-end' : ''}`}>
            <div className={`max-w-4xl p-4 break-words ${isUserMessage ? 'bg-base-300 rounded-3xl' : 'w-full'}`}>
                {filteredContent}
            </div>
        </div>
    )
}

export default Message