package com.ai.gemini.qna_chat_backend.controller;

import com.ai.gemini.qna_chat_backend.Service.QnaService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("api/qna")
public class AiController  {

    private final QnaService qnaService;


    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload){
        String question = payload.get("question");
        String answer= qnaService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
}