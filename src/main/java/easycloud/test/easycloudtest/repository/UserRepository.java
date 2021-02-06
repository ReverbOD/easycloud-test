package easycloud.test.easycloudtest.repository;

import easycloud.test.easycloudtest.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
