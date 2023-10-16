package com.fawry.store.externalapi;

import com.fawry.store.dtos.PostProductDto;
import com.fawry.store.dtos.ProductDto;
import com.fawry.store.dtos.ProductDtoData;
import com.fawry.store.dtos.enums.ProductDtoEnum;
import com.fawry.store.exceptions.NoSuchEntityException;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.scheduling.support.SimpleTriggerContext;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class FetchProductData {

    final String PRODUCT_NOT_FOUND = "PRODUCT_NOT_FOUND";
    final String URL = "http://localhost:5000/products";


    public Mono<?> fetchProduct (ProductDtoEnum dtoEnum, long productId){
        WebClient webClient = WebClient.create(URL);
        Mono<?> productDtoMono = null;
        switch (dtoEnum){
            case GET : {
                productDtoMono = webClient.get()
                        .uri("/{id}", productId)
                        .retrieve()
                        .bodyToMono(ProductDto.class);
                break;
            }
            case POST: {
                productDtoMono = webClient.get()
                        .uri("/{id}", productId)
                        .retrieve()
                        .bodyToMono(PostProductDto.class);
                break;
            }
            case GET_ALL:{
                productDtoMono = webClient.get()
                        .uri("/{id}", productId)
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
                .uri("/findByIds")
                .body(Mono.just(ids), new ParameterizedTypeReference<List<Integer>>() {
                })
                .retrieve()
                .bodyToMono(List.class);
        productDtoMono = productDtoMono.switchIfEmpty(Mono.error(new NoSuchEntityException(PRODUCT_NOT_FOUND)));
        return productDtoMono;
    }


    public Mono<?> fetchAllProducts (){
        WebClient webClient = WebClient.create(URL);
        Mono<List> productDtoMono = webClient
                .get()
                .uri("/findAllForStore")
                .retrieve()
                .bodyToMono(List.class);
        productDtoMono = productDtoMono.switchIfEmpty(Mono.error(new NoSuchEntityException(PRODUCT_NOT_FOUND)));
        return productDtoMono;
    }

    public   Mono<List> fetchSearchedProducts(String text){
        WebClient webClient = WebClient.create(URL);
        Mono<List> productDtoMono = webClient
                .post()
                .uri(uriBuilder ->
                    uriBuilder.path("/search")
                              .queryParam("product" , text)
                              .build()
                )
                .retrieve()
                .bodyToMono(List.class);
        productDtoMono = productDtoMono.switchIfEmpty(Mono.error(new NoSuchEntityException(PRODUCT_NOT_FOUND)));
        return productDtoMono;
    }


}
