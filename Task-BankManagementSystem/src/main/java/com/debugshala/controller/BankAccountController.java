package com.debugshala.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.debugshala.dto.BankAccountDTO;
import com.debugshala.entity.BankAccount;
import com.debugshala.service.BankAccountService;

@RestController
@RequestMapping("/api/accounts")
public class BankAccountController {

    private final BankAccountService service;

    public BankAccountController(BankAccountService service) {
        this.service = service;
    }

    @PostMapping("/")
    public BankAccountDTO createAccount(@RequestBody BankAccountDTO dto) {
        return service.createAccount(dto);
    }

    @GetMapping("/")
    public List<BankAccount> getAllAccounts() {
        return service.getAllAccounts();
    }

    @PutMapping(value = "/{id}", consumes = "application/json", produces = "application/json")
    public BankAccountDTO updateAccount(@PathVariable Long id, @RequestBody BankAccountDTO dto) {
        System.out.println("Updating account with ID: " + id);
        System.out.println("Account data: " + dto.getAccountHolderName());
        return service.updateAccount(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Long id) {
        service.deleteAccount(id);
    }

    @PutMapping("/deposit/{id}")
    public BankAccount deposit(@PathVariable Long id, @RequestParam Double amount) {
        return service.deposit(id, amount);
    }

    @PutMapping("/withdraw/{id}")
    public BankAccount withdraw(@PathVariable Long id, @RequestParam Double amount) {
        return service.withdraw(id, amount);
    }
}