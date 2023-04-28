package com.cloudstorage.cloudstorage.cloud;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudstorage.cloudstorage.model.CloudModel;

@Service()
public class CloudService {

  @Autowired()
  private CloudRepository cloudRepository;

  public List<CloudModel> get() {
    List<CloudModel> CloudList = cloudRepository.findAll();
    return CloudList;
  }

  protected CloudModel getByUUID(UUID uuid) {
    CloudModel cloud = cloudRepository.findById(uuid).orElse(null);
    return cloud;
  }

  public CloudModel post(String cloudTitle) {
    return cloudRepository.save(new CloudModel(UUID.randomUUID(), cloudTitle));
  }

  public void delete(UUID uuid) {
    cloudRepository.deleteById(uuid);
  }
}
