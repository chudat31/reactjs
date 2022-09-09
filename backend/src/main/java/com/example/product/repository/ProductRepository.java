package com.example.product.repository;

import com.example.product.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select  * from product_management.product where name like 'Bun%' " , nativeQuery = true)
    List<Product> getListNoodles();

    @Query(value = "select * from product_management.product where name like 'Banh_Mi%'", nativeQuery = true)
    List<Product> getListBread();

    Product findProductByName(String name);
}
