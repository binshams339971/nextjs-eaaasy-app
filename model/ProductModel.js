class ProductModel {
    constructor({
        id,
        identifier,
        name,
        sub_info,
        description,
        brand_id,
        category_id,
        sub_category_id,
        series_id,
        external_link,
        video_src,
        video_thumbnail_src,
        video_link,
        video_thumbnail_link,
        createdAt,
        updatedAt,
    }) {
        this.id = id;
        this.identifier = identifier;
        this.name = name;
        this.sub_info = sub_info;
        this.description = description;
        this.brand_id = brand_id;
        this.category_id = category_id;
        this.sub_category_id = sub_category_id;
        this.series_id = series_id;
        this.external_link = external_link;
        this.video_src = video_src;
        this.video_thumbnail_src = video_thumbnail_src;
        this.video_link = video_link;
        this.video_thumbnail_link = video_thumbnail_link;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default ProductModel;