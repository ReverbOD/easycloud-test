package easycloud.test.easycloudtest.controller;

import easycloud.test.easycloudtest.model.User;
import easycloud.test.easycloudtest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    // Routes for index.html
    @GetMapping("/homepage")
    public String viewIndex(Model model) {
        System.out.print("Get /homepage ");
        return "index";
    }

    // GET- Retrieve all users list
    @GetMapping("")
    public List<User> userList() {
        return userService.listAllUser();
    }
    // POST User
    @PostMapping("/")
    public void add(@RequestBody User user) {
        userService.saveUser(user);
    }

    // Retrieve User By ID
    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        try {
            User user = userService.getUser(id);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    // PUT - Modify User with the selected ID
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody User user, @PathVariable Integer id) {
        try {
            User existUser = userService.getUser(id);
            user.setId(id);
            userService.saveUser(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // DELETE - delete user with selected ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {

        userService.deleteUser(id);
    }

}
