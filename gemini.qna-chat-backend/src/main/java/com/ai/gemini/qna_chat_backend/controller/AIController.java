package com.ai.gemini.qna_chat_backend.controller;

import com.ai.gemini.qna_chat_backend.Service.QnaService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/qna")
public class AIController {

    private final  QnaService service;
    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");
        String answer = service.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
}
