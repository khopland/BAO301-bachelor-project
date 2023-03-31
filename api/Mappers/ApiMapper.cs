﻿using api.Dtos;
using api.Models;
using Core.Models;
using Riok.Mapperly.Abstractions;

namespace api.Mappers;

[Mapper]
public partial class ApiMapper
{
    public partial CourseDto CourseToDto(Course car);
    public partial User PostUserToUser(PostUser user);
}