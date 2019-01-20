const mongoose = require('mongoose');
const DEFAULT_IMG = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhAQBxIVERMTFQ8PEBEXEBAYEhAOFxUbFhkdGBgbHSggGBolHRUVITEiJSkrLi4uGB8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANIA0gMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCBAUDAf/EAEAQAAIBAwEEBQcJBwUBAAAAAAABAgMEBREGEiExIkFRYZETMkJSYnGBBxQVI3KCoaKxJDRzssHR4TVTktLiFv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAEW2l2qpYyTp2iU6vperT9/ayC3uayV9Ju4qyafoqWkPBcALenWp0/Pkl72kZqSkuD1KQEZOMtY8GBeIKctszk7XTyNaa06t+TXg+B3MftzkKEkr2Maq635s/w4fgBY4ORiM/j8tHS3npLrhLhP/PwOuAAAAAAAAAAAAAAAAAAAAAAAfCCbS7Y1I1ZUsQ0kuEqvPWXs/wBwJ4QjazaryW9QxculyqVE/N7o9/eRCWUyEqjcq1XV9flan9zUASlvcZczEAAAAAAAyjJxknF6NcmiV4HbS4tdIZTWpDkqnpr3+sRIAXXZ3dve0FO1kpxfJo2CmsZlLzFV9+0np60XxjP3oszZ7PW+attafRnHTfh2d67UB2QAAAAAAAAAAAAAAAADSy1/SxlhOtW5RXLtfUgI/tvnfmdD5vav6ya6bXoU3/VlcnveXNW8up1Kz1lJ6tngAAAAAAAAAAAAAADbxt9Xxt7GravSS8HHrTNQAXJh8jSyljGrR5PhKPXGa5o3yq9kcy8VkVGs/qqnCfYpdUi0wPoAAAAAAAAAAAAAVxt7l/nV+qFJ9Cn53fU/wTTaDJLFYqpVXNLSC7ZvkVDJucm5vVvi2/WAxAAAAAAAAAAAAAAAAAAAs3YjLfP8Z5Oq9Z0d2D74ei/6fArI6uzeSeLy9OpJ9F9Cp9h8/DmBbwPh9AAAAAAAAAAACuflCyPlshChB8Ka3pfbl/ZESNvKXDuslWqS9KdR/d14GoAAAAAAAAAAAAAAAAAAAAAAWLsdmq2QUadZwiqcIwS3vrKskuenqpEtIR8mvk5Urjorei6fS3eO69eH5ScAAAAAAAAADzqy3KbfYpM9DWyD3cfVfZCo/wArApcxAAAAAAAAAAAAAAAAAAAAAAAJn8ms/wBruF2xpvwf/osArj5OZL6Zqp9dKT8JxLHAAAAAAAAAGlmXpiLj+FV/kZumjmv9HuP4Nb+RgU0AAAAAAAAAAAAAAAAAAAAAAACXfJxB/TFV9SpSXjOP/UsUi+wuK+ZY7y03rOsoz90OolAAAAAAAAAA1clFTx9ZdsKi/KzaMJwU4tPrWgFHgyqQcKjUuaej+BiAAAAAAAAAAAAAAAAAAAAAAWxshcfONnaDj6K8m/uvT9DtlfbC5aFlUlbXfR32p02+C32tNPjoWCAAAAAAAAANTIXcLGxqVanKEZT9/YjbODnbaWXrwto8KacalxJeqvNj73/QCs68LirUlUnF9JSrNqPot6a/Z1ErKvGMt5absI1vuS04/mLNq4ul9JVY7qUatt5CK6kotprwlA+1MJQcoLstqlr749HR/DpeIFUAyMQAAAAAAAAAAAAAAAAAAAm2zWYs8nQja5qMZNLcpylFdL2deqRLbexq2mitar3F6E1vqMfZlqpeLZTxI8Je7UXUVDHznKPLelGLivvSTAsl1YRlGM2k3rou3Tnoepx8LiJ2KdS8m61aSSnUfHSPqx15ROwAAAA86kZyg9x6PqZ6ADVp3UZSUZrdm/Rf6p9aPRU/Jxfk1q223r1s+1qNOtT3a0VJdjWqOfUx9FT3aNapTb9GNbXwjLUBd5i1slrfqdPTk5UpyWv2oJo4uV20sadu1jm6k2tIy3ZRiu/jxN67xmQhBuWQlTiuuVOjp8XwK7yq3shJUqnzjqU1DTfl3LiBog7Udmcp9HTr1Y7iit/clwqNdb07u84oAAAAAAAAAAAAAAAAAyjCcvNTfuMSa7B5qhb03bXLUW5OVOT5Ny4br7+ADY6tj5KNO4tG5/7vkpVIvveuu4TyKUY6R4aGQAAAAAAAAAHjcW9G4p6XEYzXZKKa/E9gByZbO4ictZUIcPZ4eBt2uPs7P91pwh3xhFPxNsAYT3PJvf5acdewpGppKTceWvAtzaCncVMVVVtOMNYy3pzcuENOPIqEADIxAAAAAAAAAAAAAZU4TnJKCbb5JcWBiS/5PbNVrmvKvFSgoxh0lqt9vXrGzWyNevWjUycdyC4qm/Oqe9ejHuJ7bW1C1pKFvFQiuUUkkB7H0AAAAAAAAAAAAAAA8K9CncR0rJSXPda1XxXWVfk7Z5baerTxsVo5biS4RW6t1y93R1LRuXNW03S5qMt37WnA5ey9hbWeIpSopb1SFOc59c5SjrzA5+X2YtP/AJ5QhwlQpycZ9b01k0+5vUrYtDbTK07DFSpp/WVVKEY+w+En4FXgAAAAAAAAAAB19lKVKvtBQjcRUot1NYyjqn0HpwZatvbW9uv2eEYfZjFfoVBh7lWeUo1JcFGdNy+zrx/AuSMlJax468gMgAAAAAAAAAAAAAA86lSFKDc2klzb4ID0Bwr7avD2eqdTfa6qa3vx5fiR2+29rS1VjSUfanLV+CAnkpKMW5PRLmyH3W0lpiIVaeNlGs03Kmt7o01KT3lr6UU+zt7iH5DMZDJfvdSUl6vKHguBzwNm8vLi+uJVLluUnzb/AERrAAAAAAAAAAAAAJJs/tZc4tKFyvKUlyXpQXsvr9xGwBcOLzePykf2Oab64PhJfA6RR0ZOEk4vRrk0d7HbXZay0U5eViuqfF/8uYFpgimP24x1xoruMqL7fOh4rj+BIrW9tbyGtrOM17MosDZAAAAAAAB8fmlP5u5uK+QqKvOU1F9FSlJqPu15AAc0AAAAAAAAAAAAAAAAAAAAAAAAzpVJ05p0209eabT8QALP2KuK9zik7icpvtlJt+LJCAAAAH//2Q=="
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    default: "unkonwn"
  },
  catchPhrase: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    trim: true,
    default: DEFAULT_IMG
  }
}, {
  timestamps: true
});

schema.pre('save', function(next) {
 
  this.photo ? this.photo : this.photo = DEFAULT_IMG;
  next();
});

module.exports = mongoose.model('Celebrity', schema);