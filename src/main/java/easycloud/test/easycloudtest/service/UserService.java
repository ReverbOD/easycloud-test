package easycloud.test.easycloudtest.service;

import easycloud.test.easycloudtest.model.User;
import easycloud.test.easycloudtest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // function to retrieve all users list
    public List<User> listAllUser() {
        return userRepository.findAll();
    }

    // Function to save user (POST)
    public void saveUser(User user) {
        userRepository.save(user);
    }

    // Function to retrieve user by id
    public User getUser(Integer id) {
        return userRepository.findById(id).get();
    }

    // Function for delete User
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
