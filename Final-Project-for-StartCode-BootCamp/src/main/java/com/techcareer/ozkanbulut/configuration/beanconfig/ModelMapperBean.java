package com.techcareer.ozkanbulut.configuration.beanconfig;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//Creating a ModelMapperBean bean
@Configuration // Tell Spring to do these configurations
public class ModelMapperBean {

    @Bean
    public ModelMapper modelMapperMethod(){
        return new ModelMapper();
    }
}
