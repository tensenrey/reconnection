package com.cloudstorage.cloudstorage.model;

import java.util.UUID;

import org.hibernate.annotations.UuidGenerator;

import jakarta.persistence.*;

@Entity
public class CloudModel {
  public CloudModel() {
  }

  public CloudModel(UUID id, String cloudTitle) {
    this.cloudTitle = cloudTitle;
    this.id = id;
  }

  @Id
  @UuidGenerator
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  public UUID id;
  public String cloudTitle;
}
