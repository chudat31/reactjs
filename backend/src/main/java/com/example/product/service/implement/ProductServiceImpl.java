package com.example.product.service.implement;

import com.example.product.form.ProductForm;
import com.example.product.models.Product;
import com.example.product.repository.ProductRepository;
import com.example.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Override
    public List<Product> getProductList() {
        return (List<Product>) productRepository.findAll();
    }

    @Override
    public Product addNewProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product getProductByName(String name) {
        return productRepository.findProductByName(name);
    }

    @Override
    public void deleteProductById(Integer id)  {
        productRepository.deleteById(id);
    }

    @Override
    public Product updateProduct(Integer id, String new_name, String new_brand, int new_price) {
        Product product = productRepository.findById(id).get();
        product.setBrand(new_brand);
        product.setName(new_name);
        product.setPrice(new_price);
        return productRepository.save(product);

    }

    @Override
    public List<Product> getListNoodles() {
        List<Product> noodles = new ArrayList<>();
        for (Product p:productRepository.getListNoodles()){
            noodles.add(p);
        }
        return noodles;
    }

    @Override
    public List<Product> getListBread() {
        List<Product> breads = new ArrayList<>();
        for (Product p:productRepository.getListBread()){
            breads.add(p);
        }
        return breads;
    }
}
