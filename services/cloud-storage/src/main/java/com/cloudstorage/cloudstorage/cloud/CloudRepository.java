package com.cloudstorage.cloudstorage.cloud;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cloudstorage.cloudstorage.model.CloudModel;

@Repository()
public interface CloudRepository extends JpaRepository<CloudModel, UUID> {
}
