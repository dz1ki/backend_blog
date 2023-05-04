"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    INSERT INTO post_images (post_id, file_name, file)
    VALUES
        (1, 'Media1/x8hhrktzlfr35fnqnfbm', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233005/Media1/x8hhrktzlfr35fnqnfbm.jpg'),
        (1, 'Media1/f7tmkdzazvpxu2afnh3y', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233015/Media1/f7tmkdzazvpxu2afnh3y.jpg'),
        (1, 'Media1/sxys4jeokwfpw2hnzfdg', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233024/Media1/sxys4jeokwfpw2hnzfdg.jpg'),
        (2, 'Media1/pzjmt0k9erzrxcbih2j7', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233035/Media1/pzjmt0k9erzrxcbih2j7.jpg'),
        (3, 'Media1/iyaxn5ryg0dmvovcwsdp', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233050/Media1/iyaxn5ryg0dmvovcwsdp.jpg'),
        (4, 'Media1/shjoflrfxov4hblru4p7', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233062/Media1/shjoflrfxov4hblru4p7.jpg'),
        (5, 'Media1/ipfzxf6opvascnzyvrhx', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233075/Media1/ipfzxf6opvascnzyvrhx.webp'),
        (7, 'Media1/f7rjhlyvkd7ehcs7phxa', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233086/Media1/f7rjhlyvkd7ehcs7phxa.jpg'),
        (7, 'Media1/d8qjbf63jhpqokicg3w2', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233096/Media1/d8qjbf63jhpqokicg3w2.jpg'),
        (9, 'Media1/kbpslk6gfhxoc1o2cb2t', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233110/Media1/kbpslk6gfhxoc1o2cb2t.jpg'),
        (10, 'Media2/hoaf8d3kjkgvzjnf1omv', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233179/Media2/hoaf8d3kjkgvzjnf1omv.jpg'),
        (11, 'Media2/bn0v2c5gswssaqgapz3i', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233190/Media2/bn0v2c5gswssaqgapz3i.jpg'),
        (12, 'Media2/pwvuojnfonj9oqvwepjw', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233201/Media2/pwvuojnfonj9oqvwepjw.jpg'),
        (13, 'Media2/nqqb1wrmygbcytvarwjq', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233219/Media2/nqqb1wrmygbcytvarwjq.jpg'),
        (13, 'Media2/hp2kgyh7w5jfnhoxdxto', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233226/Media2/hp2kgyh7w5jfnhoxdxto.jpg'),
        (13, 'Media2/hvir2zgspyivyzeciczy', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233233/Media2/hvir2zgspyivyzeciczy.jpg'),
        (16, 'Media2/ivfxey9vmtyolavdibhz', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233243/Media2/ivfxey9vmtyolavdibhz.jpg'),
        (17, 'Media2/vcjwdru5ccwhe580xakv', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233254/Media2/vcjwdru5ccwhe580xakv.jpg'),
        (18, 'Media2/l16jjwhqyi48gnz5dzwr', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233264/Media2/l16jjwhqyi48gnz5dzwr.jpg'),
        (19, 'Media3/bkynmvmtigpw3jaxz4ys', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233321/Media3/bkynmvmtigpw3jaxz4ys.jpg'),
        (20, 'Media3/axgsaquyrnbobmugz7by', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233336/Media3/axgsaquyrnbobmugz7by.jpg'),
        (21, 'Media3/iubfhlnksjxbxeccr95o', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233345/Media3/iubfhlnksjxbxeccr95o.jpg'),
        (22, 'Media3/bqq82e9xnk5veoz0zavq', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233354/Media3/bqq82e9xnk5veoz0zavq.jpg'),
        (23, 'Media3/xj7ucvoi5hmimc3o13xr', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233363/Media3/xj7ucvoi5hmimc3o13xr.jpg'),
        (24, 'Media3/ohknnsa5m2abtzm7vxnu', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233372/Media3/ohknnsa5m2abtzm7vxnu.jpg'),
        (25, 'Media3/fpy557q9iu1vwmtw6sdv', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233383/Media3/fpy557q9iu1vwmtw6sdv.jpg'),
        (27, 'Media3/sb65cw8qroilfb6agd7j', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233394/Media3/sb65cw8qroilfb6agd7j.jpg'),
        (27, 'Media3/qvjdfudzsdez6s8lh9se', 'http://res.cloudinary.com/db8rod1hf/image/upload/v1683233400/Media3/qvjdfudzsdez6s8lh9se.jpg');`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DELETE FROM "post_images"`);
  },
};
