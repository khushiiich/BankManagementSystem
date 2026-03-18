package com.debugshala.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.debugshala.dto.BankAccountDTO;
import com.debugshala.entity.BankAccount;
import com.debugshala.repository.BankAccountRepository;

@Service
public class BankAccountService {

    private final BankAccountRepository repository;

    public BankAccountService(BankAccountRepository repository) {
        this.repository = repository;
    }

    public BankAccountDTO createAccount(BankAccountDTO dto){

        BankAccount account = new BankAccount();

        account.setAccountHolderName(dto.getAccountHolderName());
        account.setAccountNumber(dto.getAccountNumber());
        account.setAccountType(dto.getAccountType());
        account.setBalance(dto.getBalance());
        account.setBranch(dto.getBranch());

        BankAccount saved = repository.save(account);

        dto.setId(saved.getId());
        return dto;
    }

    public List<BankAccount> getAllAccounts(){
        return repository.findAll();
    }

    public BankAccount getAccountById(Long id){
        return repository.findById(id).orElseThrow();
    }

    public BankAccountDTO updateAccount(Long id, BankAccountDTO dto){
        BankAccount existing = repository.findById(id).orElseThrow();

        existing.setAccountHolderName(dto.getAccountHolderName());
        existing.setAccountNumber(dto.getAccountNumber());
        existing.setAccountType(dto.getAccountType());
        existing.setBranch(dto.getBranch());
        existing.setBalance(dto.getBalance());

        BankAccount saved = repository.save(existing);
        
        dto.setId(saved.getId());
        return dto;
    }

    public void deleteAccount(Long id){
        repository.deleteById(id);
    }

    public BankAccount deposit(Long id, Double amount){

        BankAccount account = repository.findById(id).orElseThrow();

        account.setBalance(account.getBalance() + amount);

        return repository.save(account);
    }

    public BankAccount withdraw(Long id, Double amount){

        BankAccount account = repository.findById(id).orElseThrow();

        if(account.getBalance() < amount){
            throw new RuntimeException("Insufficient Balance");
        }

        account.setBalance(account.getBalance() - amount);

        return repository.save(account);
    }

}