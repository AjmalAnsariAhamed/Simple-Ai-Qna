package com.ai.gemini.qna_chat_backend.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class QnaService {
    //Acess to ApiKey and url (Gemini)
    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public String getAnswer(String question){
        //Construct the request payload
        //make Api call
        //return response
        return "helo";
    }
}
