package com.ai.gemini.qna_chat_backend.controller;

import com.ai.gemini.qna_chat_backend.Service.QnaService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/qna/ask")
public class AIController {

    private final  QnaService service;
    @GetMapping
    public ResponseEntity<String> askQuestion(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");
        String answer = service.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
}
