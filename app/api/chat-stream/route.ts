import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req : NextRequest) => {
    console.log("HIIIIIIIIIIIIIIIIIIIIII")
    try {
        console.log("Appel en cours ..")
        const { messages, sessionId} = await req.json()
        // const lastMessage = messages[messages.length - 1].content

        const recentMessages = messages.slice(-5);
        const lastMessage = recentMessages[recentMessages.length - 1].content;

        const promptInFrensh = `Reponds en francais : ${lastMessage}`
        const response = await ragChat.chat(promptInFrensh, {streaming :true, sessionId })
        if(!response){
            console.log("Aucune reponse obtenue. ")
            return new Response("Aucune reponse obtenue", { status: 500 })
        }
        console.log(response)
        // return aiUseChatAdapter(response)
        return new Response(JSON.stringify(response), { status: 200, headers: { "Content-Type": "application/json" } });
        
    } catch (error){
        console.error("Erreur dans la requête:", error);
        return new Response("Une erreur est survenue.", { status: 500})
    }

}