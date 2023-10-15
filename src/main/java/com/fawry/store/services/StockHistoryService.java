package com.fawry.store.services;

import com.fawry.store.dtos.ProductDto;
import com.fawry.store.dtos.StockHistoryDto;
import com.fawry.store.entites.StockHistory;

import java.util.List;

public interface StockHistoryService {

    List<StockHistoryDto> getAllHistories();
    List<StockHistoryDto> getHistoryOfProduct(long productId);
    List<StockHistoryDto> getHistoryOfWarehouse(long warehouseId);
    StockHistoryDto makeHistory(StockHistoryDto historyDto);
    StockHistoryDto getHistory(long id);
    StockHistoryDto addNewHistory(StockHistoryDto stockHistoryDto);
    void removeHistory(long id);
}
