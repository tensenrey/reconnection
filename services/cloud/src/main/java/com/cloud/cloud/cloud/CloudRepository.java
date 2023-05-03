package com.cloud.cloud.cloud;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cloud.cloud.model.CloudModel;

@Repository()
public interface CloudRepository extends JpaRepository<CloudModel, UUID> {
}
