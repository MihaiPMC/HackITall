package crv_coders.ainews.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ViewController {
    @GetMapping("/")
    public String home() {
        return "index"; // For Thymeleaf templates in `templates/`
    }
}