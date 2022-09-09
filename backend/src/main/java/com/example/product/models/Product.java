package com.example.product.models;


import com.example.product.dto.ProductDto;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Table(name = "product")
@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Product {

//    @OneToOne
//    @JoinTable(name = "certificate", joinColumns = @JoinColumn(name = "product_id"))
//    private Set<Certificate> certificates = new HashSet<>();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NonNull
    private Integer id;

    @NonNull
    @Column(name = "name", unique = true)
    private String name;

    @NonNull
    @Column(name = "brand")
    private String brand;

    @Column(name = "madein")
    private String madein;

    @NonNull
    @Column(name = "price")
    private int price;

    @NonNull
    @Column(name = "release_year")
    private String release_year;

    @Column(name = "cert_id")
    private Integer cert_id;

    public ProductDto toDto() {
        return ProductDto.builder().id(id)
                .name(name).brand(brand)
                .madein(madein).price(price)
                .release_year(release_year).cert_id(cert_id).build();
    }
}
