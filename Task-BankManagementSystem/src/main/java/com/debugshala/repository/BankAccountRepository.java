package com.debugshala.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.debugshala.entity.BankAccount;

public interface BankAccountRepository extends JpaRepository<BankAccount, Long>{

}