package com.cloudstorage.cloudstorage.cloud;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cloudstorage.cloudstorage.model.CloudModel;

@RequestMapping("cloud")
@RestController
public class CloudController {
  @Autowired()
  private CloudService cloudService;

  @GetMapping("/")
  protected List<CloudModel> get() {
    return this.cloudService.get();
  }

  @GetMapping("/{cloudId}")
  protected CloudModel getByUUID(@PathVariable(value = "cloudId") UUID cloudId) {
    return this.cloudService.getByUUID(cloudId);
  }

  @PostMapping("/")
  protected CloudModel post(@RequestBody CloudDto cloudTitle) {
    return this.cloudService.post(cloudTitle.getCloudTitle());
  }

  @DeleteMapping("/{cloudId}")
  protected void delete(@PathVariable(value = "cloudId") UUID cloudId) {
    this.cloudService.delete(cloudId);
  }
}
