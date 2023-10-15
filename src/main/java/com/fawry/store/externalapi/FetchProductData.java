package com.fawry.store.externalapi;

import com.fawry.store.dtos.PostProductDto;
import com.fawry.store.dtos.ProductDto;
import com.fawry.store.dtos.ProductDtoData;
import com.fawry.store.dtos.enums.ProductDtoEnum;
import com.fawry.store.exceptions.NoSuchEntityException;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class FetchProductData {

    final String PRODUCT_NOT_FOUND = "PRODUCT_NOT_FOUND";
    final String URL = "https://fakestoreapi.com";


    public Mono<?> fetchProduct (ProductDtoEnum dtoEnum, long productId){
        WebClient webClient = WebClient.create(URL);
        Mono<?> productDtoMono = null;
        switch (dtoEnum){
            case GET : {
                productDtoMono = webClient.get()
                        .uri("/products/{id}", productId)
                        .retrieve()
                        .bodyToMono(ProductDto.class);
                break;
            }
            case POST: {
                productDtoMono = webClient.get()
                        .uri("/products/{id}", productId)
                        .retrieve()
                        .bodyToMono(PostProductDto.class);
                break;
            }
            case GET_ALL:{
                productDtoMono = webClient.get()
                        .uri("/products/{id}", productId)
                        .retrieve()
                        .bodyToMono(ProductDtoData.class);
                break;
            }
        }

        productDtoMono = productDtoMono.switchIfEmpty(Mono.error(new NoSuchEntityException(PRODUCT_NOT_FOUND)));
        return productDtoMono;
    }

    public Mono<List> fetchProductsOfWarehouse(List<Long> ids){
        WebClient webClient = WebClient.create(URL);
        Mono<List> productDtoMono = webClient
                .post()
                .uri("/products")
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(ids))
                .retrieve()
                .bodyToMono(List.class);
        productDtoMono = productDtoMono.switchIfEmpty(Mono.error(new NoSuchEntityException(PRODUCT_NOT_FOUND)));
        return productDtoMono;
    }


    public Mono<?> fetchAllProducts (){
        WebClient webClient = WebClient.create(URL);
        Mono<List> productDtoMono = webClient
                .get()
                .uri("/products")
                .retrieve()
                .bodyToMono(List.class);
        productDtoMono = productDtoMono.switchIfEmpty(Mono.error(new NoSuchEntityException(PRODUCT_NOT_FOUND)));
        return productDtoMono;
    }




}
