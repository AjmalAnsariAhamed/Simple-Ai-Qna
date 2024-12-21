package com.ai.gemini.qna_chat_backend.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class QnaService {
    //Acess to ApiKey and url (Gemini)
    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;


    private final WebClient webClient;

    public QnaService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }

    public String getAnswer(String question){
        //Construct the request payload
        Map<String, Object> requestBody= Map.of("contents",new Object[]{
                Map.of("parts",new Object[]{
                        Map.of("text", question)
                })
        });
        //{content:[{parts:[{text:Qery}]}]} this the format that
        //gemini api will accept

        //make Api call
        String response= webClient.post().uri(geminiApiUrl+geminiApiKey)
                .header("Content-Type","application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();
        //return response
        return response;
    }
}
