-- Table: public."bookCategories"

-- DROP TABLE public."bookCategories";

CREATE TABLE public."bookCategories"
(
    id uuid NOT NULL,
    category character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    "bookId" uuid,
    "createdById" uuid,
    "updatedById" uuid,
    CONSTRAINT "bookCategories_pkey" PRIMARY KEY (id),
    CONSTRAINT "bookCategories_bookId_fkey" FOREIGN KEY ("bookId")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookCategories_createdById_fkey" FOREIGN KEY ("createdById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookCategories_updatedById_fkey" FOREIGN KEY ("updatedById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public."bookCategories"
    OWNER to postgres;