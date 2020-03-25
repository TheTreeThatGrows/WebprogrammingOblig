package com.oslomet.oblig2;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BestillingController {

    private final List<Bestilling> alleBestilling = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBestilling(Bestilling innBestilling){
        alleBestilling.add(innBestilling);
    }
    @GetMapping("/hentAlle")
    public List<Bestilling> hentAlle(){
        return alleBestilling;
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        alleBestilling.clear();
    }
}