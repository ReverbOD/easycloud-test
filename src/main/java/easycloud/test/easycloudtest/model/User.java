package easycloud.test.easycloudtest.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    private int id;
    private String firstName;
    private String lastName;
    private Boolean deleted;

    public User() {
    }

    public User(int id, String firstName, String lastName, Boolean deleted) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.deleted = deleted;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Boolean getDeleted(){
        return deleted;
    }

    public void setDeleted(Boolean deleted){
        this.deleted = deleted;
    }
}
