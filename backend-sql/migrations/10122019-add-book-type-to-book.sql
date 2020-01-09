-- Table: public."bookTypes"

-- DROP TABLE public."bookTypes";

CREATE TABLE public."bookTypes"
(
    id uuid NOT NULL,
    type character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    "bookId" uuid,
    "createdById" uuid,
    "updatedById" uuid,
    CONSTRAINT "bookTypes_pkey" PRIMARY KEY (id),
    CONSTRAINT "bookTypes_bookId_fkey" FOREIGN KEY ("bookId")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookTypes_createdById_fkey" FOREIGN KEY ("createdById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookTypes_updatedById_fkey" FOREIGN KEY ("updatedById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public."bookTypes"
    OWNER to postgres;