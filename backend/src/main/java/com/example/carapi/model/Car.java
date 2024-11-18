package main.java.com.example.carapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marca;
    private String nome;
    private String tipo;
    private int ano;
    private int potencia;
    private int portas;
    private int peso;
    private int altura;
    private int largura;
    private int comprimento;
}
