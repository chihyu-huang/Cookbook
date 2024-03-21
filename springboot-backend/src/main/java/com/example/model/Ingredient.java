package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ingredient_id;

    @Column(name = "name")
    private String name;

    @Column(name = "amount")
    private String amount;

    @ManyToOne
    @JoinColumn(name = "recipe_id", referencedColumnName = "id")
//    @JsonIgnoreProperties("ingredients")
    @JsonBackReference
    private Recipe recipe;

}
