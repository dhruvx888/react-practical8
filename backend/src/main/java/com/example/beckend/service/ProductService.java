package com.example.beckend.service;

import com.example.beckend.model.Product;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class ProductService {

    private final List<Product> productList = List.of(
            new Product("1", "Laptop", 75000),
            new Product("2", "Phone", 35000),
            new Product("3", "Tablet", 25000)
    );

    public Flux<Product> getAllProducts() {
        return Flux.fromIterable(productList);
    }

    public Mono<Product> getProductById(String id) {
        return Flux.fromIterable(productList)
                .filter(product -> product.getId().equals(id))
                .next();
    }
}
